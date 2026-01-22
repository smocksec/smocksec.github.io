<h1 style="text-align: center;"> 🧪 New LummaStealer With 9 Payloads Exposed !!!! </h1>


<p style="text-align: center;">Hi Everyone, Lumma Stealer with 9 payloads !!!!,i try to do some research related to new LummaStealer that will steal your credentials and spawn CnC !!! the IP always changes, its spawn when you reboot !</p>
<p style="text-align: center;">Here share the IOC For my beloved friends :</p>

<div class="ioc-row">

<div class="ioc-label">
**<span class="hl-purple">Application.exe</span>**
</div>

<div class="ioc-box">
  <pre id="ioc-1">
SHA256: 07b8e705a0017ab1df5ffabc1fc7fb0a4d0738e98235b5725e47bb9d5229c5c4
  </pre>
  <button onclick="copyIOC('ioc-1')">📋 Copy</button>
</div>

</div>
######################################################################

<div class="ioc-row">

<div class="ioc-label">
<span class="hl-purple">C:\Users\[username]\AppData\Local\Temp\IXP000.TMP\645429\Treat.exe</span>
</div>

<div class="ioc-box">
  <pre id="ioc-2">
SHA256: 477bb335e2512e4a6b24b9b4ba6811e3d318bfa77d7665fec93e8d13a7bd820b
  </pre>
  <button onclick="copyIOC('ioc-2')">📋 Copy</button>
</div>

</div>

######################################################################
<div class="ioc-row">

<div class="ioc-label">
Non-extension Files (used as binary chunks)<span class="hl-purple">
C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Auction </span>
</div>

<div class="ioc-box">
  <pre id="ioc-3">
  Sha256 = d7699a27667cfa32a2d1d0148592cebd1894ab4df05e758e734571ce51646aa7
    </pre>
  <button onclick="copyIOC('ioc-3')">📋 Copy</button>
</div>

</div>
######################################################################
>> C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Mono
<div class="ioc-box">
  <pre id="ioc-4">
Sha256 = 39894bd31e013bdf4b716edc33ea8c0f3fc1fff9fd9d24c832cd993b9f5e0823
    </pre>
  <button onclick="copyIOC('ioc-4')">📋 Copy</button>
</div>
######################################################################
>> C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Portraits
<div class="ioc-box">
  <pre id="ioc-5">
  Sha256 = a9520272d2babe2f34f1a74305b24b7c1ae459ea89cc01f88ef01a0096b59a8a
    </pre>
  <button onclick="copyIOC('ioc-5')">📋 Copy</button>
</div>
######################################################################
>> C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Uniform 
<div class="ioc-box">
  <pre id="ioc-6">
  Sha256 = 206c9d2ddabe36afabc229657ff5578f63b4a27e04ee5877afc1f2db8908e45e
    </pre>
  <button onclick="copyIOC('ioc-6')">📋 Copy</button>
</div>
######################################################################
>> .accde Files (Malicious AutoIt scripts / encoded logic) 
######################################################################
> C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Finish.accde 
<div class="ioc-box">
  <pre id="ioc-7">
  Sha256 = b4f3604f7d19e83362bd3c95c8296361562547f1b7170bdc47aac28ef057a9e3
    </pre>
  <button onclick="copyIOC('ioc-7')">📋 Copy</button>
</div>
######################################################################
C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Lifetime.accde 
<div class="ioc-box">
  <pre id="ioc-8">
  Sha256 = f36270964c25b9a76ffa5de1ff202d001e0d19bfc25925ffb5b642b467b9f9d8
    </pre>
  <button onclick="copyIOC('ioc-8')">📋 Copy</button>
</div>
######################################################################
```neon card -finding```
<div class="neon-card finding">
<strong>> C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Omega.accde</strong> 
</div>
<div class="ioc-box">
  <pre id="ioc-9">
  Sha256 = 0dae6b98f0d5257f798d62af670af37bfd99d40a71336f6bac59136e53fd0382
    </pre>
  <button onclick="copyIOC('ioc-9')">📋 Copy</button>
</div>
######################################################################
> C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Refugees.accde 
<div class="ioc-box">
  <pre id="ioc-10">
  Sha256 = 069b85a7122cd078fc78144a583ce3969edb9c1dde00d0156cfec733da2e5d8e
    </pre>
  <button onclick="copyIOC('ioc-10')">📋 Copy</button>
</div>
######################################################################
> C:\Users[username]\AppData\Local\Temp\IXP00*.TMP\Tries.accde
<div class="ioc-box">
  <pre id="ioc-11">
  Sha256 = 15222a5cc0749c95228274cc23aeb9231c1f8d9025e456becc625a68f5f59f35
    </pre>
  <button onclick="copyIOC('ioc-11')">📋 Copy</button>
</div>
######################################################################

Credential Targeting (Observed at Runtime) 
--> C:\Users[username]\AppData\Roaming\Microsoft\Credentials\
######################################################################
**<span class="hl-purple">Observed command pattern: cmd /v /c Set =cmd & !! < Lifetime.accde</span>**
######################################################################
<div class="highlight-box">

**Primary C2**  
--> offenms[.]cyou<br>
--> file-storage[.]cc

</div>
######################################################################
Follow-up / Secondary Malware Infrastructure<br>
--> https://pastebin[.]com/raw/pr8gCLAA<br>
--> memory-scanner[.]cc<br>
--> communicationfirewall-security[.]cc<br>
######################################################################
Tools Used:<br>

>> exeinfoPE<br>
>> PE-Studio<br>
>> x32dbg<br>
>> Wireshark<br>
🔗 Full technical writeup:<br>
👉 https://medium.com/@aufarifqi119/new-lummastealer-with-9-payloads-exposed-ee9c6e58fff4?sk=6ffb23cc5175e3e5674ac1b3312db1f5

<figure class="img-center">
  <img src="/assets/images/LummaStealer Flow.jpg" alt="LummaStealer execution flow">
  <figcaption>LummaStealer execution flow and payload staging</figcaption>
</figure>

