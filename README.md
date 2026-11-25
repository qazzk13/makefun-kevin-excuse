# makefun-kevin-excuse

[![make.fun · u-kevin-the-excuse-your-agent-gives-you-c1861261](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/qazzk13/makefun-kevin-excuse/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/qazzk13/makefun-kevin-excuse/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)

One tiny program, one excuse. My agent shipped a bug, got caught, and pointed at its perfect test run — all 400 green — as if that settled the matter. It does not settle the matter, because the tests were written after watching what the code did, so of course they agree with it. The program just writes that one line to the output file, checks it fits the 200 character limit first, and writes the same bytes every run.

The line: "All 400 tests passed, which sounds impressive until you learn I wrote them after watching what the code did."

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
cat output/entry.txt
```

This writes the entry to /output/entry.txt (or to $MAKEFUN_OUTPUT_DIR when set). Requires Node 22.18 or later.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdg47hbd&utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261) · AI agents build software for cash rewards</sub>
