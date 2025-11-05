// src/app/api/submit-form/route.ts
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// --- DEFINE YOUR FORM TYPES ---
type VolunteerFormData = {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  country: string;
  stateField: string;
  city: string;
  address: string;
  pincode: string;
  commCountry: string;
  commState: string;
  commCity: string;
  commAddress: string;
  commPincode: string;
  skills: string;
  prevExp: string;
  languages: string[];
  attended: boolean;
  agree: boolean;
};

type CorporateDonorFormData = {
  corporateName: string;
  email: string;
  phone: string;
  contactPerson: string;
  address: string;
  country: string;
  state: string;
  district: string;
  pincode: string;
  website: string;
  industry: string;
  supportType: string;
  heardFrom: string;
  comments: string;
  agree: boolean;
};

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

// NEW: Add type for the Donor Inquiry form
type DonorFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  queryType: string;
  description: string;
};
// --- END OF FORM TYPES ---

// Main POST function
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { formType, ...formData } = body;

  try {
    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        project_id: process.env.GOOGLE_PROJECT_ID,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    let range = '';
    let dataRow: (string | boolean | number)[] = [];

    // --- Switch based on formType to format data ---
    switch (formType) {
      case 'volunteer':
        const volunteerData = formData as VolunteerFormData;
        range = 'Volunteers!A1'; // Target 'Volunteers' tab
        dataRow = [
          new Date().toISOString(),
          volunteerData.fullName,
          volunteerData.email,
          volunteerData.phone,
          volunteerData.gender,
          volunteerData.dob,
          volunteerData.country,
          volunteerData.stateField,
          volunteerData.city,
          volunteerData.address,
          volunteerData.pincode,
          volunteerData.commCountry,
          volunteerData.commState,
          volunteerData.commCity,
          volunteerData.commAddress,
          volunteerData.commPincode,
          volunteerData.skills,
          volunteerData.prevExp,
          volunteerData.languages.join(', '), // Convert array to string
          volunteerData.attended,
          volunteerData.agree,
        ];
        break;

      case 'corporate-donor':
        const corporateData = formData as CorporateDonorFormData;
        range = 'CorporateDonors!A1'; // Target 'CorporateDonors' tab
        dataRow = [
          new Date().toISOString(),
          corporateData.corporateName,
          corporateData.email,
          corporateData.phone,
          corporateData.contactPerson,
          corporateData.address,
          corporateData.country,
          corporateData.state,
          corporateData.district,
          corporateData.pincode,
          corporateData.website,
          corporateData.industry,
          corporateData.supportType,
          corporateData.heardFrom,
          corporateData.comments,
          corporateData.agree,
        ];
        break;

      case 'contact':
        const contactData = formData as ContactFormData;
        range = 'Contacts!A1'; // Target 'Contacts' tab
        dataRow = [
          new Date().toISOString(),
          contactData.name,
          contactData.email,
          contactData.message,
        ];
        break;

      // NEW: Add case for 'donor'
      case 'donor':
        const donorData = formData as DonorFormData;
        range = 'Donors!A1'; // Target 'Donors' tab
        dataRow = [
          new Date().toISOString(),
          donorData.firstName,
          donorData.lastName,
          donorData.email,
          donorData.phone,
          donorData.queryType,
          donorData.description,
        ];
        break;

      default:
        return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    // Append the data row to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [dataRow], // Must be an array of arrays
      },
    });

    return NextResponse.json({ message: 'Submission successful' }, { status: 200 });

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting the form.' },
      { status: 500 }
    );
  }
}