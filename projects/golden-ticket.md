<h1 style="text-align: center;"> 🔥 Golden Tickets: The Silent Domain Takeover — Detect It Before Attackers Do </h1>

<div class="neon-card finding">
<strong>Golden Ticket attacks allow adversaries to mint Kerberos tickets that impersonate any user — including Domain Admins — and these forged tickets can bypass typical controls like password rotation and MFA. If your SOC lacks good Golden Ticket detection you may never notice domain compromise until it’s too late.</strong> 
</div>

<figure class="img-center">
  <img src="/assets/images/GoldenTicketAttackFlow.jpg" alt="GoldenTicketAttackFLow">
  <figcaption>Golden Ticket AttackFlow</figcaption>
</figure>

<div class="highlight-box">
Splunk: detect ticket lifetime > 10 hours and missing TGT correlation
</div>
<div class="ioc-box">
  <pre id="query-1">
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
    </pre>
  <button onclick="copyIOC('query-1')">📋 Copy</button>
</div>


<div class="neon-card finding">
<strong>Correlate 4769 without preceding 4768</strong>
</div>
<div class="ioc-box">
  <pre id="ioc-11">
  index=your_activedirectory (EventCode=4768 OR EventCode=4769)
| rex field=message "Logon GUID:\s+(?<logon_guid>[^\r\n]+)"
| eval ev=EventCode
| stats earliest(_time) as first_time by logon_guid, ev
| stats values(first_time) as times by logon_guid
| where NOT mvfind(mvkeys(times),"4768")  // pseudo filter - if 4768 not present before 4769
    </pre>
  <button onclick="copyIOC('ioc-11')">📋 Copy</button>
</div>


