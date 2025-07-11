'use client';

import React, { useState } from 'react';
import { GetQuoteData } from '@/app/types/getQuote';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  data: GetQuoteData;
}

export default function QuoteForm({ data }: Props) {
  // Form state
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventName: 'wedding',
    eventDate: '',
    startTime: '',
    endTime: '',
    duration: '00 Hours',
    venueName: '',
    address: '',
    guests: '',
    boothTypes: [] as string[],
    addOns: [] as string[],
    themeRequest: '',
    contactMethods: [] as string[],
    comment: '',
  });

  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Helpers
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;

  if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
    const checked = e.target.checked;
    const currentValues = form[name as keyof typeof form] as string[];
    const updated = checked
      ? [...currentValues, value]
      : currentValues.filter((item) => item !== value);
    setForm({ ...form, [name]: updated });
  } else {
    setForm({ ...form, [name]: value });
  }
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (result.success) {
        setSnackbarMessage('✅ Quote submitted successfully!');
        setForm({
          fullName: '',
          email: '',
          phone: '',
          eventName: 'wedding',
          eventDate: '',
          startTime: '',
          endTime: '',
          duration: '00 Hours',
          venueName: '',
          address: '',
          guests: '',
          boothTypes: [],
          addOns: [],
          themeRequest: '',
          contactMethods: [],
          comment: '',
        });
      } else {
        setSnackbarMessage('❌ Failed to send your request.');
      }
    } catch (err) {
      console.error(err);
      setSnackbarMessage('❌ Something went wrong.');
    } finally {
      setSnackbarOpen(true);
      setLoading(false);
    }
  };

  return (
    <div className=' px-2 md:px-4'>
      {/* ...HEADER SECTION... */}
      <div className='max-w-[1440px] mx-auto h-[103px] md:h-[111px]'>
        <h1 className='md:text-[56px] trxt-[#222222] text-[24px] leading-[30px] md:leading-[64px] font-semibold'>{data.heading}</h1>
        <p className='md:text-[20px] text-[#2E2E2E] text-[16px] leading-[20px] mt-3 md:leading-[26px] font-normal'>
          {data.subheading}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* EVENT DETAILS */}
        <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 h-[2001px] md:h-[1004px] gap-6  mt-6'>
          <div className='flex bg-[#612042]  rounded-[24px] items-center justify-center h-full overflow-y-auto'>
            <div className='w-[614px]  px-2 h-[892px] '>
              <h1 className='text-[32px] text-white leading-[60px] font-semibold'>Event Details</h1>
              <div className='flex flex-col gap-5 text-[#ABABAB] h-[812px] justify-between'>
                <div className='flex flex-col'>
                  <label className='text-[#ABABAB]'>Event Name</label>
                  <select name="eventName" value={form.eventName} onChange={handleChange} className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#F4DDFF4F]'>
                    <option>wedding</option>
                  </select>
                </div>

                <div className='flex flex-col'>
                  <label  className='text-[#ABABAB]'>Event Date</label>
                  <input name="eventDate" value={form.eventDate} onChange={handleChange} type='date' className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#F4DDFF4F]' />
                </div>

                <div className='flex justify-between gap-5'>
                  <div className='w-full'>
                    <label  className='text-[#ABABAB]'>Event Start Time</label>
                    <input name="startTime" value={form.startTime} onChange={handleChange} type='time' className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#F4DDFF4F]' />
                  </div>
                  <div className='w-full'>
                    <label className='text-[#ABABAB]'>Event End Time</label>
                    <input name="endTime" value={form.endTime} onChange={handleChange} type='time' className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#F4DDFF4F]' />
                  </div>
                </div>

                <div className='flex flex-col'>
                  <label className='text-[#ABABAB]'>Event Duration</label>
                  <select name="duration" value={form.duration} onChange={handleChange} className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#F4DDFF4F]'>
                    <option>00 Hours</option>
                  </select>
                </div>

                <div className='flex flex-col'>
                  <label className='text-[#ABABAB]'>Venue Name</label>
                  <input name="venueName" value={form.venueName} onChange={handleChange} type='text' className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#F4DDFF4F]' />
                </div>

                <div className='flex flex-col'>
                  <label className='text-[#ABABAB]'>Address</label>
                  <textarea name="address" value={form.address} onChange={handleChange} rows={3} placeholder='Address of Venue' className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#F4DDFF4F]' />
                </div>

                <div className='flex flex-col'>
                  <label className='text-[#ABABAB]'>Number Of Guests</label>
                  <input name="guests" value={form.guests} onChange={handleChange} placeholder='200' type='number' className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#F4DDFF4F]' />
                </div>
              </div>
            </div>
          </div>

          {/* BOOTH & ADDONS */}
          <div className='flex rounded-[24px] items-center justify-center h-full'>
            <div className='w-[614px] h-[892px] text-[#2E2E2E] flex flex-col justify-between gap-5 '>
              <h2 className='text-[32px] leading-[60px]  text-[#2E2E2E] font-semibold'>Choose Your Booth & Add-ons</h2>

              <div className='flex flex-col gap-[12px] h-[232px] justify-between p-3'>
                <p className='md:text-[24px] text-[20px] font-semibold text-[#2E2E2E] leading-[60px]'>Booth Type</p>
                {data.eventBoothOptions.map((booth) => (
                  <div key={booth.id} className='flex gap-5 items-center h-[25px]'>
                    <input type='checkbox' name="boothTypes" value={booth.label} checked={form.boothTypes.includes(booth.label)} onChange={handleChange} className='w-[24px] h-[24px]' />
                    <p className='text-[16px] text-[#2E2E2E]'>{booth.label}</p>
                  </div>
                ))}
              </div>

              <div className='flex flex-col gap-[12px] h-[269px] justify-between p-3'>
                <p className='md:text-[24px] text-[#2E2E2E] font-semibold text-[20px] leading-[60px]'>Add-Ons</p>
                {data.addOns.map((addon) => (
                  <div key={addon.id} className='flex gap-5 items-center h-[25px]'>
                    <input type='checkbox' name="addOns" value={addon.label} checked={form.addOns.includes(addon.label)} onChange={handleChange} className='w-[24px] h-[24px]' />
                    <p className='text-[16px] text-[#2E2E2E]'>{addon.label}</p>
                  </div>
                ))}
              </div>

              <div className='flex flex-col h-[232px] justify-between px-2 mt-5'>
                <p className='md:text-[24px] text-[20px] font-semibold leading-[20px] md:leading-[60px] text-[#222222]'>{data.themeQuestion}</p>
                <textarea name="themeRequest" value={form.themeRequest} onChange={handleChange} placeholder='Let us know about your event theme, color scheme, or logo needs.' className='h-full w-full border border-[#BFBFBF] rounded-[8px] mt-3 p-2' />
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className='w-full  mt-10'>
          <h2 className='text-[32px] text-[#2E2E2E] leading-[60px] font-semibold mb-2'>{data.contactHeading}</h2>

          <div className='h-[89px] mx-auto'>
            <div className='flex flex-col'>
              <label className='text-[#616161]' >Full Name</label>
              <input name="fullName" value={form.fullName} onChange={handleChange} placeholder='Enter Your Full Name' className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#BFBFBF]' />
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between h-auto md:h-[89px] gap-5 mt-5'>
            <div className='w-full'>
              <label className='text-[#616161]'>Email</label>
              <input name="email" value={form.email} onChange={handleChange} type='email' placeholder='Enter Your Email' className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#BFBFBF]' />
            </div>
            <div className='w-full'>
              <label  className='text-[#616161]'>Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} type='text' placeholder='Enter Your Phone Number' className='w-full mt-2 border p-[16px] rounded-[8px] outline-0 border-[#BFBFBF]' />
            </div>
          </div>

          <div className='h-[235px] mt-5'>
            <label  className='text-[#616161]'>Additional Comment</label>
            <textarea name="comment" value={form.comment} onChange={handleChange} placeholder='Anything you want to ask' className='w-full mt-2 border p-[16px] h-full rounded-[8px] outline-0 border-[#BFBFBF]' />
          </div>

          <div className='w-full max-w-[614px] h-[158px] mt-6'>
            <h3 className='text-[24px] leading-[60px] text-[#2E2E2E] font-semibold'>Preferred Contact Method</h3>
            <div className='flex flex-col gap-3 text-[#2E2E2E] w-full'>
              {data.preferredContactMethods.map((method) => (
                <div key={method.id} className='flex items-center gap-3'>
                  <input type='checkbox' name="contactMethods" value={method.method.trim()} checked={form.contactMethods.includes(method.method.trim())} onChange={handleChange} className='w-[20px] h-[20px] rounded-full accent-pink-500' />
                  <p className='text-[#2E2E2E]'>{method.method.trim()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-7'>
          <button type="submit" disabled={loading} className='block text-white mx-auto w-[217px] h-[56px] bg-[#E064BE] rounded-[8px] text-[16px] font-bold cursor-pointer'>
            {loading ? 'Sending...' : data.submitButtonText || '🚀 Submit Request'}
          </button>
        </div>
      </form>

      {/* Snackbar Message */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={() => setSnackbarOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
}
