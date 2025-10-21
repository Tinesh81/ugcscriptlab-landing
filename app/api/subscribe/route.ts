import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const emailSchema = z.object({
  email: z.string().email('Invalid email address')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = emailSchema.parse(body)

    // Here you would typically:
    // 1. Validate the email
    // 2. Check if it's already subscribed
    // 3. Add to your email list (ConvertKit, Mailchimp, etc.)
    // 4. Send welcome email
    // 5. Store in database

    // For now, we'll just simulate success
    console.log('New subscription:', email)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to early access!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid email address' 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again.' 
      },
      { status: 500 }
    )
  }
}
