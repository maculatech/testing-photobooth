'use client'

import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function ContactForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<'success' | 'error'>('success')
  const [snackMessage, setSnackMessage] = useState('')

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phone, message, source: 'contact' }),
      })

      const result = await res.json()

      if (result.success) {
        setSeverity('success')
        setSnackMessage('✅ Message sent successfully!')
        setFullName('')
        setEmail('')
        setPhone('')
        setMessage('')
      } else {
        setSeverity('error')
        setSnackMessage('❌ Failed to send message.')
      }
    } catch (error) {
      console.error(error)
      setSeverity('error')
      setSnackMessage('❌ Something went wrong.')
    } finally {
      setOpen(true)
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-8 justify-between">
        <div className="h-[89px]">
          <label className="text-[16px] text-[#616161]">Full Name</label>
          <input
            className="w-full mt-2 pl-[15px] h-[56px] border border-[#BFBFBF] text-[#616161] rounded-[8px]"
            type="text"
            placeholder="Enter Your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="md:flex w-full gap-4 h-[180px] md:h-[89px]">
          <div className="md:w-1/2">
            <label className="text-[16px] text-[#616161]">Email</label>
            <input
              className="w-full mt-2 pl-[15px] h-[56px] border border-[#BFBFBF] text-[#616161] rounded-[8px]"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="md:w-1/2">
            <label className="text-[16px] text-[#616161]">Phone</label>
            <input
              className="w-full mt-2  pl-[15px] h-[56px] border border-[#BFBFBF] text-[#616161] rounded-[8px]"
              type="text"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="h-[235px]">
          <label className="text-[16px] text-[#616161]">Message</label>
          <textarea
            className="w-full mt-2 h-[202px] p-[15px] border border-[#BFBFBF] text-[#616161] rounded-[8px]"
            placeholder="Enter Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="text-center mt-10">
          <button
            type="submit"
            className="block mx-auto w-[217px] h-[56px] bg-[#E064BE] text-white font-bold text-[16px] rounded-[8px]"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Contact Now'}
          </button>
        </div>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{ width: '100%' }}
          action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  )
}
