package it.project.galleria_arte;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import javax.mail.MessagingException;
import java.io.IOException;

@SpringBootApplication
public class GalleriaArteApplication /*implements CommandLineRunner */ {

	public static void main(String[] args) {
		SpringApplication.run(GalleriaArteApplication.class, args);
	}

	//@Override
	//public void run(String... args) throws Exception {

		//System.out.println("Sending Email...");



		//MailSender.sendEmail();
		//System.out.println("Done");

	}
