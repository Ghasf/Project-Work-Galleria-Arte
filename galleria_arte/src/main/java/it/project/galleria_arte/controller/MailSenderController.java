package it.project.galleria_arte.controller;

import it.project.galleria_arte.util.MailSenderComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping
public class MailSenderController {

    @Autowired
    private MailSenderComponent mailSenderComponent;

    @PostMapping("/send-email/{dest}/{ogg}/{mess}")
    public void sendMmail(@PathVariable("dest") String dest,@PathVariable("ogg") String ogg,@PathVariable("mess") String mess){
        mailSenderComponent.send(dest,ogg,mess);
    }
}
