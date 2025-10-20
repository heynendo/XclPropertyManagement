import { Resend } from 'resend'
import ContactEmail from '../components/ContactEmail'

export default {
  async fetch(request, env) {
    try {
      const resend = new Resend(env.RESEND_API_KEY)
      const body = await request.json()
      const { name, email, phone, property, subject, business, message } = body

      const data = await resend.emails.send({
        from: 'Donovan Heynen <onboarding@resend.dev>',
        to: 'heynen.donovan@gmail.com',
        subject: `New message from ${name}`,
        reply_to: email,
        react: (
          <ContactEmail
            name={name}
            email={email}
            phone={phone}
            property={property}
            subject={subject}
            business={business}
            message={message}
          />
        ),
      })

      return Response.json({ success: true, data })
    } catch (error) {
      console.error(error)
      return Response.json({ success: false, error })
    }
  },
}
