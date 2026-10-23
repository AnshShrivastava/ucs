export interface Theme { title: string; text: string; icon: 'book' | 'palette' | 'heart' | 'compass' }
export interface SchoolInfo {
  name: string; tagline: string; logoPath: string | null; address: string; phone: string; email: string
  mapsUrl: string; mapEmbedUrl: string; timings: string; affiliation: string; classes: string[]
  activities: string[]; vision: string; mission: string; values: { title: string; text: string }[]
  themes: Theme[]; admission: { eligibility: string; process: string[]; documents: string[] }
  social: { facebook: string; instagram: string; youtube: string }
}
// Future service contracts (not implemented yet; see README roadmap).
export interface Enquiry { parentName: string; phone: string; email?: string; childClass?: string; message: string }
export interface Announcement { id: string; title: string; date: string; body: string }
export interface PaymentTransaction { id: string; orderId: string; amountPaise: number; status: 'created' | 'pending' | 'paid' | 'failed' }
