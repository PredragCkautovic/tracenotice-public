# TraceNotice Article 50 Implementation Pack

Download edition · Version 2026-10-03

This is operational tooling, not legal advice, certification, or a legal compliance determination.

---

## File: `01-surface-inventory.csv`

surface_id,product,public_url_or_location,provider_or_deployer,direct_ai_interaction,synthetic_text_audio_image_video,emotion_or_biometric,deepfake_or_public_interest_text,first_user_exposure,current_disclosure,current_marking_or_provenance,owner,status,notes
S-001,,,,,,,,,,,,Unreviewed,


---

## File: `02-control-map.md`

# Article 50 control map — operational triage

Use this as a triage map, not as a legal conclusion.

## Direct AI interaction — Article 50(1)
Operational question: does a natural person interact directly with the AI system, and is the AI nature not already obvious in context?
Evidence to retain: entry-point screenshot/recording; wording shown or spoken no later than first interaction; locale/accessibility variants; version/release reference; human handoff behavior if applicable.

## Synthetic content marking — Article 50(2)
Operational question: does the system generate or manipulate synthetic text, audio, image, or video content in a way that brings the provider-side marking/detection obligation into scope?
Evidence to retain: provider/system version; marking/provenance mechanism documentation; machine-readable detection test output; exception/transition questions routed to qualified review; release/configuration reference.

## Emotion recognition / biometric categorisation — Article 50(3)
Operational question: are natural persons exposed to an emotion-recognition or biometric-categorisation deployment?
Evidence to retain: notice placement and timing; affected surface/location; owner/configuration; relevant privacy/data-protection review reference.

## Deepfakes / certain public-interest text — Article 50(4)
Operational question: does the deployment expose people to deepfake content, or specified AI-generated/manipulated public-interest text without conditions that alter the disclosure requirement?
Evidence to retain: visible disclosure example; content workflow and human/editorial review step; publication surface; content provenance/marking evidence; reviewer decision record for boundary cases.

## Presentation — Article 50(5)
Operational check: relevant information should be clear and distinguishable and provided no later than the first interaction or exposure, subject to the detailed scope and exceptions in the Act and Commission guidance.


---

## File: `03-disclosure-copy-library.md`

# Disclosure copy library

Operational starting points only. Final wording should be reviewed against the actual deployment, audience, language, accessibility needs, and applicable legal guidance.

## Chat / assistant
Short: `You are chatting with an AI assistant.`
Product-oriented: `This is Acme's AI assistant. It can help with common questions and hand off to a person when needed.`

## Voice agent
Short: `Hi — you're speaking with Acme's AI assistant.`
Task-oriented: `Hi, you're speaking with Acme's AI assistant. I can help with bookings and common questions.`

## Persistent identity label
`AI assistant`

## Generated or manipulated content
Visible disclosure wording depends on the content type, role, and applicable Article 50(4) conditions. Avoid treating a generic visible label as proof that provider-side machine-readable marking obligations under Article 50(2) are satisfied.

## Anti-patterns
- Hiding the only disclosure in Terms or Privacy.
- Showing the disclosure only after the first substantive AI interaction.
- Calling the system only `Assistant` where the AI nature is not otherwise obvious.
- Treating a visible label as proof that machine-readable marking/provenance requirements are satisfied.


---

## File: `04-qa-acceptance-checklist.md`

# QA / acceptance checklist

## Entry point
- [ ] AI identity is visible or spoken before/no later than the first interaction where required.
- [ ] Mobile, desktop, embedded, authenticated, and SDK entry points were checked.
- [ ] Supported locales were checked.
- [ ] Keyboard/screen-reader behavior was checked where applicable.

## During interaction
- [ ] AI identity remains reasonably distinguishable.
- [ ] Human handoff changes identity clearly.
- [ ] Interrupted greeting / voicemail / callback flows were tested for voice agents.

## Synthetic content
- [ ] Marking/provenance mechanism is identified.
- [ ] Machine-readable output has been tested rather than assumed.
- [ ] Provider/system version is recorded.
- [ ] Legacy-system transition questions are documented if relevant.

## Deepfake / public-interest publication
- [ ] Visible disclosure is tested on the actual publication surface.
- [ ] Human/editorial review path is documented where relevant.
- [ ] Evidence shows the disclosure as actually deployed, not just designed.

## Evidence
- [ ] Screenshot/recording captured.
- [ ] Timestamp recorded.
- [ ] Release/commit/config version recorded.
- [ ] Control owner recorded.
- [ ] Open legal interpretation questions are separated from engineering findings.


---

## File: `05-evidence-register.csv`

evidence_id,surface_id,article50_reference,artifact_type,artifact_location,captured_at_utc,release_or_config_ref,control_owner,finding,status,review_question
E-001,S-001,50(1),Screenshot,,,,,,Open,


---

## File: `06-remediation-ticket-template.md`

# Remediation ticket template

**Surface:**

**Likely Article 50 control:**

**Observed deployed state:**

**Gap / uncertainty:**

**Implementation change:**

**Acceptance criteria:**
- [ ]
- [ ]
- [ ]

**Evidence required after release:**
- screenshot / recording;
- release or configuration reference;
- marking/provenance test output where applicable;
- owner and completion date.

**Legal/compliance review question:**

**Owner:**

**Target release:**


---

## File: `07-review-handoff-template.md`

# Reviewer handoff

## Product / deployment
## Scope reviewed
## Surfaces inventoried
## Likely Article 50 controls considered
## Changes implemented
## Evidence attached
## Open interpretation questions
## Exceptions / transition points requiring confirmation
## Reviewer
## Review date
## Decision / follow-up

TraceNotice separates observed technical/product evidence from legal interpretation. Use qualified counsel or the appropriate compliance owner for legal conclusions.


---

## File: `08-primary-sources.md`

# Primary sources

Check these official sources for the current position:

- EU AI Act / Regulation (EU) 2024/1689: https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- European Commission — Article 50 transparency guidelines: https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems
- European Commission — Article 50 Q&A: https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act
- European Commission — Transparency Code of Practice: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content

Pack version: 2026-10-03. Regulations, guidance, enforcement practice, and product facts can change.


---

## File: `START-HERE.md`

# TraceNotice Article 50 Implementation Pack

Version: 2026-10-03

This pack is an operational implementation aid for EU AI Act Article 50 transparency work. It is not legal advice, certification, or a legal compliance determination.

## Use this pack in 45 minutes

1. Fill `01-surface-inventory.csv` with every user-facing AI interaction, content-generation flow, emotion/biometric surface, deepfake flow, and public-interest publication flow.
2. Use `02-control-map.md` to identify which Article 50 control may be relevant.
3. Draft the in-product disclosure with `03-disclosure-copy-library.md`.
4. Test the shipped state with `04-qa-acceptance-checklist.md`.
5. Record screenshots, release references, marking/provenance test output, owners, and review status in `05-evidence-register.csv`.
6. Turn each gap into an engineering ticket using `06-remediation-ticket-template.md`.
7. Hand the evidence pack to qualified legal/compliance review using `07-review-handoff-template.md`.

## Timing snapshot

The European Commission states that Article 50 transparency obligations apply from 2 August 2026. A limited transition until 2 December 2026 applies to the Article 50(2) marking/detection obligation for certain systems placed on the market before 2 August 2026.

Always confirm the current official text and guidance before relying on this pack.
