<div class="content-wrap">

<h1 class="page-title">
🔥 Golden Tickets: The Silent Domain Takeover — Detect It Before Attackers Do
</h1>

<div class="neon-card finding">
<strong>
Golden Ticket attacks allow adversaries to mint Kerberos tickets that impersonate any user — including Domain Admins — and these forged tickets can bypass typical controls like password rotation and MFA.
</strong>
</div>

<figure class="img-center">
  <img src="/assets/images/GoldenTicketAttackFlow.png" alt="Golden Ticket Attack Flow">
  <figcaption>Golden Ticket Attack Flow</figcaption>
</figure>

<h2 class="section-title">🔍 Detection Logic</h2>

<div class="highlight-box">
Splunk: detect ticket lifetime &gt; 10 hours and missing TGT correlation
</div>
<div class="ioc-box">
  <pre id="ioc-1">
# Query 1: Detect ticket lifetime &gt; 10 hours
index=your_activedirectory EventCode=4768 OR EventCode=4769
| rex field=message "Start Time:\s+(?<ticket_start>[^\r\n]+)"
| rex field=message "End Time:\s+(?<ticket_end>[^\r\n]+)"
| rex field=message "Service Name:\s+(?<service_name>[^\r\n]+)"
| rex field=message "TargetUserName:\s+(?<target_user>[^\r\n]+)"
| eval ticket_start_epoch = strptime(ticket_start, "%Y-%m-%d %H:%M:%S")
| eval ticket_end_epoch = strptime(ticket_end, "%Y-%m-%d %H:%M:%S")
| eval ticket_lifetime_hours = (ticket_end_epoch - ticket_start_epoch) / 3600
| where ticket_lifetime_hours > 10 OR service_name="krbtgt"
| stats values(EventCode) as events count by target_user, service_name, ticket_lifetime_hours, _time
| where count > 0

# Query 2: Correlate 4769 without preceding 4768
index=your_activedirectory (EventCode=4768 OR EventCode=4769)
| rex field=message "Logon GUID:\s+(?<logon_guid>[^\r\n]+)"
| eval ev=EventCode
| stats earliest(_time) as first_time by logon_guid, ev
| stats values(first_time) as times by logon_guid
| where NOT mvfind(mvkeys(times),"4768")
  </pre>
  <button onclick="copyIOC('ioc-1')">📋 Copy</button>
</div>
