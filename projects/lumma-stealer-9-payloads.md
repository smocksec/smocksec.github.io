---
title: 🧪 New LummaStealer With 9 Payloads Exposed !!!!
---

Summary:
Hi Everyone, Lumma Stealer with 9 payloads !!!!

Today i try to do some research related to new LummaStealer that will steal your credentials and spawn CnC !!! the IP always changes, its spawn when you reboot !

Here share the IOC For my beloved friends :

<div class="ioc-box">
  <pre id="ioc-1">
Application.exe
SHA256: 07b8e705a0017ab1df5ffabc1fc7fb0a4d0738e98235b5725e47bb9d5229c5c4
  </pre>
  <button onclick="copyIOC('ioc-1')">📋 Copy</button>
</div>

<style>
.ioc-box {
  border: 1px solid #ccc;
  background: #f8f9fa;
  padding: 12px;
  margin: 15px 0;
  border-radius: 6px;
  position: relative;
}

.ioc-box pre {
  margin: 0;
  font-size: 0.85em;
  white-space: pre-wrap;
}

.ioc-box button {
  margin-top: 8px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>


<div class="ioc-box">
  <pre id="ioc-temp">
C:\Users\[username]\AppData\Local\Temp\IXP000.TMP\645429\Treat.exe
SHA256: 477bb335e2512e4a6b24b9b4ba6811e3d318bfa77d7665fec93e8d13a7bd820b
  </pre>
  <button onclick="copyIOC('ioc-temp')">📋 Copy</button>
</div>

Non-extension Files (used as binary chunks) C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Auction --> Sha256 = d7699a27667cfa32a2d1d0148592cebd1894ab4df05e758e734571ce51646aa7


C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Mono --> Sha256 = 39894bd31e013bdf4b716edc33ea8c0f3fc1fff9fd9d24c832cd993b9f5e0823

C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Portraits --> Sha256 = a9520272d2babe2f34f1a74305b24b7c1ae459ea89cc01f88ef01a0096b59a8a

C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Uniform --> Sha256 = 206c9d2ddabe36afabc229657ff5578f63b4a27e04ee5877afc1f2db8908e45e

.accde Files (Malicious AutoIt scripts / encoded logic) C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Finish.accde --> Sha256 = b4f3604f7d19e83362bd3c95c8296361562547f1b7170bdc47aac28ef057a9e3

C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Lifetime.accde --> Sha256 = f36270964c25b9a76ffa5de1ff202d001e0d19bfc25925ffb5b642b467b9f9d8

C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Omega.accde --> Sha256 = 0dae6b98f0d5257f798d62af670af37bfd99d40a71336f6bac59136e53fd0382

C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Refugees.accde --> Sha256 = 069b85a7122cd078fc78144a583ce3969edb9c1dde00d0156cfec733da2e5d8e

C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Tries.accde --> Sha256 = 15222a5cc0749c95228274cc23aeb9231c1f8d9025e456becc625a68f5f59f35

Credential Targeting (Observed at Runtime) C:\Users[username]\AppData\Roaming\Microsoft\Credentials\

Observed command pattern: cmd /v /c Set =cmd & !! < Lifetime.accde

Primary C2 --> offenms[.]cyou --> file-storage[.]cc

Follow-up / Secondary Malware Infrastructure --> https://pastebin[.]com/raw/pr8gCLAA --> memory-scanner[.]cc --> communicationfirewall-security[.]cc

Tools Used:

exeinfoPE
PE-Studio
x32dbg
Wireshark
🔗 Full technical writeup:
👉 https://medium.com/@aufarifqi119/new-lummastealer-with-9-payloads-exposed-ee9c6e58fff4?sk=6ffb23cc5175e3e5674ac1b3312db1f5

LummaStealer Flow.jpg ![Extracted JavaScript from malicious PDF](/assets/images/LummaStealer Flow.jpg)


<script>
function copyIOC(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("IOC copied to clipboard!");
  });
}
</script>
