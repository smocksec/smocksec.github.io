## 🧪 Malicious PDF Analysis (Real Case)

**Summary:**  
Analyzed a malicious PDF delivering a second-stage payload via embedded JavaScript.

**What I did:**
- Static analysis using pdf-parser
- Extracted embedded JavaScript
- Dynamic analysis in FLARE-VM

**Tools Used:**
- pdf-parser
- x64dbg
- Wireshark

**Key Findings:**
- Obfuscated JavaScript
- Network beaconing to C2 infrastructure

🔗 **Full technical writeup:**  
👉 https://medium.com/@yourname/malicious-pdf-analysis

LummaStealer Flow.jpg
![Extracted JavaScript from malicious PDF](/assets/images/LummaStealer Flow.jpg)
