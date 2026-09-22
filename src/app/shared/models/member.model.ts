export type VoicePart = 'soprano' | 'alto' | 'tenor' | 'bass';
export type MembershipStatus = 'active' | 'inactive' | 'on-leave' | 'alumni';

export interface Member {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  voicePart: VoicePart;
  dateOfBirth: string; // ISO date string, e.g. '1998-04-12'
  joinDate: string; // ISO date string
  status: MembershipStatus;
  photoUrl?: string;
}
