import { school } from '../config/school'
import type { Announcement, Enquiry, PaymentTransaction, SchoolInfo } from '../types'

/** UI calls these interfaces. Swap the static implementation for API calls later. */
export interface SchoolInfoService { getSchoolInfo(): Promise<SchoolInfo> }
export interface AnnouncementService { list(): Promise<Announcement[]> }
export interface EnquiryService { submit(e: Enquiry): Promise<void> } // Phase 2
export interface ApplicationService { /* Phase 3 */ }
export interface PaymentService { getTransaction(id: string): Promise<PaymentTransaction> } // Phase 3

export const schoolInfoService: SchoolInfoService = { getSchoolInfo: async () => school }
export const announcementService: AnnouncementService = { list: async () => [] }
