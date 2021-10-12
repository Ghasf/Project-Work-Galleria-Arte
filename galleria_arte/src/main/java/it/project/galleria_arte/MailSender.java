package it.project.galleria_arte;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class MailSender {

    @Autowired
    private static JavaMailSender javaMailSender;

    void sendEmail(String dest,String ogg,String mess) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(dest);

        msg.setSubject(ogg);
        msg.setText(mess);

        javaMailSender.send(msg);

    }
}
