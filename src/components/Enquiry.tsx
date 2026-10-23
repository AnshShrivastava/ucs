import { useState } from 'react'
import { school } from '../config/school'

/** Static-site enquiry: opens the visitor's own email app. Nothing is sent or stored by this site. */
export default function Enquiry() {
  const [f, setF] = useState({ name: '', phone: '', msg: '' })
  const ready = Boolean(school.email)
  const href = `mailto:${school.email}?subject=${encodeURIComponent('Admission enquiry')}&body=${encodeURIComponent(`${f.msg}\n\nName: ${f.name}\nPhone: ${f.phone}`)}`
  const field = 'mt-1 w-full rounded-xl border border-navy/20 bg-white px-4 py-3'
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/10">
      <h3 className="text-xl font-semibold text-navy">Send an enquiry</h3>
      <p className="mt-1 text-sm text-ink/70">{ready ? 'This opens your email app with the message ready to send. This website does not submit or store enquiries.' : 'Online enquiry is not available yet. Contact details will be added soon. This website cannot submit or store enquiries.'}</p>
      <div className="mt-4 space-y-4">
        <label className="block text-sm font-medium">Parent name<input className={field} value={f.name} onChange={e => setF({ ...f, name: e.target.value })} disabled={!ready} /></label>
        <label className="block text-sm font-medium">Phone number<input className={field} type="tel" value={f.phone} onChange={e => setF({ ...f, phone: e.target.value })} disabled={!ready} /></label>
        <label className="block text-sm font-medium">Message<textarea className={field} rows={4} value={f.msg} onChange={e => setF({ ...f, msg: e.target.value })} disabled={!ready} /></label>
        {ready ? <a href={href} className="inline-flex rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-soft">Open email app</a>
          : <button disabled className="rounded-full bg-navy/30 px-6 py-3 font-semibold text-white">Not available yet</button>}
      </div>
    </div>
  )
}
