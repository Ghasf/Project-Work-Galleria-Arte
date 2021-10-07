package it.project.galleria_arte.service;

import it.project.galleria_arte.dao.PrenotazioniDao;
import it.project.galleria_arte.model.Prenotazioni;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class PrenotazioniService {

    @Autowired

    private PrenotazioniDao prenotazioniDao;

    public List<Prenotazioni> getPrenotazioni(){
        return prenotazioniDao.getPrenotazioni();
    }

    public Prenotazioni getPrenotazioneById(Integer id){
        return prenotazioniDao.getPrenotazioneById(id);
    }

    public void savePrenotazione(Prenotazioni prenotazione){
        prenotazioniDao.savePrenotazione(prenotazione);
    }

    public LocalDate getDataInizioById(Integer id){
        return prenotazioniDao.getDataInizioById(id);
    }

    public List<LocalDate> getDateInizioByIdSala(Integer id){
        return prenotazioniDao.getDateInizioByIdSala(id);
    }

    public List<LocalDate> getDateFineByIdSala(Integer id){
        return prenotazioniDao.getDateFineByIdSala(id);
    }

    public LocalDate getDataFineById(Integer id){
        return prenotazioniDao.getDataFineById(id);
    }

    public void deletePrenotazioneById(Integer id){
        prenotazioniDao.deletePrenotazioneById(id);
    }
}
