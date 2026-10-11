#!/usr/bin/env python3
"""Submit TraceNotice's public sitemap URLs to IndexNow.

IndexNow keys are intentionally public proof-of-domain-control tokens, not secrets.
This script reads public/sitemap.xml and submits only tracenotice.com URLs.
"""
from __future__ import annotations

import json
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import urlparse

HOST = "tracenotice.com"
KEY = "77e6c9fe9d0423181cd20704a78b1c52"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
ENDPOINT = "https://api.indexnow.org/indexnow"
ROOT = Path(__file__).resolve().parents[1]
SITEMAP = ROOT / "public" / "sitemap.xml"


def sitemap_urls() -> list[str]:
    root = ET.parse(SITEMAP).getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls: list[str] = []
    for node in root.findall("sm:url/sm:loc", ns):
        if not node.text:
            continue
        url = node.text.strip()
        parsed = urlparse(url)
        if parsed.scheme == "https" and parsed.hostname == HOST:
            urls.append(url)
    return list(dict.fromkeys(urls))


def main() -> int:
    urls = sitemap_urls()
    if not urls:
        print("No canonical TraceNotice URLs found in sitemap", file=sys.stderr)
        return 2
    payload = json.dumps({
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }).encode("utf-8")
    request = urllib.request.Request(
        ENDPOINT,
        data=payload,
        headers={"Content-Type": "application/json; charset=utf-8", "User-Agent": "TraceNotice-IndexNow/1.0"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            print(json.dumps({"status": response.status, "submitted": len(urls), "endpoint": ENDPOINT}))
            return 0 if response.status in (200, 202) else 1
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", "replace")[:1000]
        print(json.dumps({"status": exc.code, "submitted": len(urls), "error": body}), file=sys.stderr)
        return 1
    except Exception as exc:
        print(json.dumps({"submitted": len(urls), "error": str(exc)}), file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
