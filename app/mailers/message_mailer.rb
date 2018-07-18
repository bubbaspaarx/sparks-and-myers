class MessageMailer < ApplicationMailer
  def email_contact(message)
    @message = message
    mail(to: @message.email, subject: "Sparks & Myers website enquiry")
  end

  def email_enquiry(message)
    @message = message
    mail(to: "edd_sparks@hotmail.com", subject: "Website Enquiry")
  end
end
# "philip@sparksandmyers.co.uk, richard@sparksandmyers.co.uk"
