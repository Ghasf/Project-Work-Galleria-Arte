package it.project.galleria_arte.controller;

import it.project.galleria_arte.MailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping
public class MailSenderController {

    //@Autowired
   // private MailSender mailSender;

    @PostMapping("/send-email/{dest}/{ogg}/{mess}")
    public void sendEmail(@PathVariable("dest") String dest,@PathVariable("ogg") String ogg,@PathVariable("mess") String mess){
        //mailSender.(dest, ogg, mess);

    }
}
