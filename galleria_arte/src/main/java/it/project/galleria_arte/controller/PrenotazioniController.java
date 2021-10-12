package it.project.galleria_arte.controller;

import com.sun.istack.NotNull;
import it.project.galleria_arte.model.Anagrafica;
import it.project.galleria_arte.model.Prenotazioni;
import it.project.galleria_arte.model.Sale;
import it.project.galleria_arte.service.AnagraficaService;
import it.project.galleria_arte.service.PrenotazioniService;
import it.project.galleria_arte.service.SaleService;
import it.project.galleria_arte.util.MailSenderComponent;
import org.hibernate.annotations.Target;
import org.springframework.aop.TargetSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping
public class PrenotazioniController {

    @Autowired
    private PrenotazioniService prenotazioniService;

    @Autowired
    private AnagraficaService anagraficaService;

    @Autowired
    private SaleService saleService;

    @Autowired
    private MailSenderComponent mailSenderComponent;

    @GetMapping("/get-prenotazioni")
    public List<Prenotazioni> getPrenotazioni(){
        return prenotazioniService.getPrenotazioni();
    }

    @GetMapping("/get-prenotazione-by-id/{id}")
    public Prenotazioni getPrenotazioneById(@PathVariable("id") Integer id){
        return prenotazioniService.getPrenotazioneById(id);
    }

    @GetMapping("/get-prenotazioni-by-id-utente/{id}")
    public List<Prenotazioni> getPrenotazioniByIdUtente(@PathVariable("id") Integer id){
        return prenotazioniService.getPrenotazioniByIdUtente(id);
    }

    @GetMapping("/get-date-inizio-by-id-sala/{id}")
    public List<LocalDate> getDateInizioByIdSala(@PathVariable("id") Integer id){
        return prenotazioniService.getDateInizioByIdSala(id);
    }

    @GetMapping("/get-date-fine-by-id-sala/{id}")
    public List<LocalDate> getDateFineByIdSala(@PathVariable("id") Integer id){
        return prenotazioniService.getDateFineByIdSala(id);
    }

    @PostMapping(value= {"/save-prenotazione", "/save-prenotazione/{idAnagrafica}/{idSala}"})
    public void savePrenotazione(@RequestBody @NotNull Prenotazioni prenotazione, @PathVariable("idAnagrafica") Integer idAnagrafica, @PathVariable("idSala") Integer idSala){
        if((idAnagrafica != null) && (idSala != null)){
            Anagrafica anagrafica = anagraficaService.getAnagraficaById(idAnagrafica);
            Sale sale = saleService.getSalaById(idSala);
            prenotazione.setAnagrafica(anagrafica);
            prenotazione.setSale(sale);
        }
        prenotazioniService.savePrenotazione(prenotazione);
    }


    @GetMapping("/get-data-inizio-by-id/{id}")
    public LocalDate getDataInizioById(@PathVariable("id") Integer id){
        return prenotazioniService.getDataInizioById(id);
    }

    @GetMapping("/get-data-fine-by-id/{id}")
    public LocalDate getDataFineById(@PathVariable("id") Integer id){
        return prenotazioniService.getDataFineById(id);
    }

    @DeleteMapping("/delete-prenotazione-by-id/{id}")
    public void deletePrenotazioneById(@PathVariable("id") Integer id){

        Prenotazioni p = prenotazioniService.getPrenotazioneById(id);

        String dest = p.getAnagrafica().getEmail();
        String ogg = "Sublime Art - prenotazione cancellata con successo";
        String mess = "Hai cancellato la prenotazione: " + p.getDescrizione() + " che era prenotata dal giorno " + p.getDataInizio() + " al giorno " + p.getDataFine() + " per la " + p.getSale().getNome();
        mailSenderComponent.send(dest,ogg,mess);
        prenotazioniService.deletePrenotazioneById(id);
    }
}
