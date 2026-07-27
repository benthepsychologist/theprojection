---
title: "Thrust"
weight: 2
unit: "$/yr (flow)"
role: "measured axis"
adopted: "reinvestment rate (Damodaran), extended · commitment (Ghemawat)"
---

**What it is.** The rate at which an actor commits capital to positions that
didn't exist last year. Not reserves, not revenue, not spending in general —
*new-position formation per year*. Free cash above a certain size is a
failure signal; thrust is the opposite signal: capital that has already
bought a position.

**How we calculate it**

| actor type | recipe |
| --- | --- |
| public corp | **capex − D&A** (TTM) + acquisitions + strategic equity stakes + capitalized training runs + PV of multi-year capacity/power reservations |
| private lab | **commitment run-rate** — announced multi-year compute/build commitments ÷ years (flagged: management headlines, not audited obligations) |
| fund / manager | net capital into **new positions** — never net inflows, which mostly buy existing assets |

**Included:** growth capex · M&A · strategic stakes · net new fund
deployments · capitalized bets (a frontier training run is capex in
everything but accounting) · take-or-pay compute and power reservations
(rating agencies already treat these as debt-equivalent capital commitments).

**Excluded:** COGS, SG&A, utilities, debt service, dividends — and
critically, **maintenance capex**. Buybacks are excluded here and tracked as
their own signed channel: [capital returned](/metric/capital-returned/).

**The maintenance split, honestly.** The computable heuristic is
maintenance ≈ D&A, so thrust-capex ≈ capex − D&A. It's what makes Intel
legible — capex ~$12.1B, D&A ~$12.4B, thrust ≈ **zero** — and it's also
known to distort during a buildout: depreciation reflects a small historical
base while current spend is huge, and if AI hardware truly lives 2–3 years
(the live depreciation-schedule debate), part of what looks like growth is
replacement. We use the heuristic anyway, rough-is-fine, and flag
hardware-heavy actors with an economic-depreciation caveat on their claims.

**Prior art.** Damodaran's reinvestment rate already makes every extension we
make — acquisitions counted, R&D capitalized, leases capitalized. Ghemawat
adds the quality dimension we tag but don't yet score: a dollar sunk into
sticky, untradeable factors is more committed than a dollar in fungible form.
Penrose adds the warning: thrust has a managerial speed limit.
