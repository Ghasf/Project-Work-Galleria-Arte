package it.project.galleria_arte.service;

import it.project.galleria_arte.dao.PrenotazioniDao;
import it.project.galleria_arte.model.Prenotazioni;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    public Date getDataInizioById(Integer id){
        return prenotazioniDao.getDataInizioById(id);
    }

    public Date getDataFineById(Integer id){
        return prenotazioniDao.getDataFineById(id);
    }

    public void deletePrenotazioneById(Integer id){
        prenotazioniDao.deletePrenotazioneById(id);
    }
}
