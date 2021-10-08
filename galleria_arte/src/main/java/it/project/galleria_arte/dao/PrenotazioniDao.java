package it.project.galleria_arte.dao;

import it.project.galleria_arte.model.Prenotazioni;
import jdk.jfr.Registered;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;
import java.util.regex.Pattern;

@Repository
public class PrenotazioniDao {

    @Autowired
    private EntityManager entityManager; //prende le informazioni dal model e le traduce in query

    public List<Prenotazioni> getPrenotazioni(){
        Session currentSession = entityManager.unwrap(Session.class);
        return  currentSession.createQuery("FROM Prenotazioni", Prenotazioni.class).getResultList();
    }

    public List<Prenotazioni> getPrenotazioniByIdUtente(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Prenotazioni> query = currentSession.createQuery("FROM Prenotazioni WHERE anagrafica.idAnagrafica = :id", Prenotazioni.class);
        query.setParameter("id", id);
        return query.getResultList();
    }

    public Prenotazioni getPrenotazioneById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Prenotazioni.class, id);
    }

    public void savePrenotazione(Prenotazioni prenotazione){
        Session currentSesion = entityManager.unwrap(Session.class);
        currentSesion.saveOrUpdate(prenotazione);
    }

    public void deletePrenotazioneById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(Prenotazioni.class, id));
    }

    public LocalDate getDataInizioById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<LocalDate> query = currentSession.createQuery("SELECT dataInizio FROM Prenotazioni  WHERE idPrenotazione = :id", LocalDate.class);
        query.setParameter("id",id);
        return query.getSingleResult();
    }

    public LocalDate getDataFineById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<LocalDate> query = currentSession.createQuery("SELECT dataFine FROM Prenotazioni  WHERE idPrenotazione = :id", LocalDate.class);
        query.setParameter("id",id);
        return query.getSingleResult();
    }

    public List<LocalDate> getDateInizioByIdSala(Integer id){
        Session currentSession = entityManager.unwrap(Session.class); /* se la query non funziona, provare con Prenotazioni.sala.idsala */
        Query<LocalDate> query = currentSession.createQuery("SELECT dataInizio FROM Prenotazioni WHERE sale.idsala = :id", LocalDate.class);
        query.setParameter("id",id);
        return query.getResultList();
    }

    public List<LocalDate> getDateFineByIdSala(Integer id){
        Session currentSession = entityManager.unwrap(Session.class); /* se la query non funziona, provare con Prenotazioni.sala.idsala */
        Query<LocalDate> query = currentSession.createQuery("SELECT dataFine FROM Prenotazioni WHERE sale.idsala = :id", LocalDate.class);
        query.setParameter("id",id);
        return query.getResultList();
    }
}
