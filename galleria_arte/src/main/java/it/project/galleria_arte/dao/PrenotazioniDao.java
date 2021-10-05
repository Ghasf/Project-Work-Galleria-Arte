package it.project.galleria_arte.dao;

import it.project.galleria_arte.model.Prenotazioni;
import it.project.galleria_arte.model.Sale;
import jdk.jfr.Registered;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Date;
import java.util.List;

@Repository
public class PrenotazioniDao {

    @Autowired
    private EntityManager entityManager; //prende le informazioni dal model e le traduce in query

    public List<Prenotazioni> getPrenotazioni(){
        Session currentSession = entityManager.unwrap(Session.class);
        return  currentSession.createQuery("FROM Prenotazioni", Prenotazioni.class).getResultList();
    }

    public void deletePrenotazioniById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(Prenotazioni.class, id));
    }

    public Date getDataInizioById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Date> query = currentSession.createQuery("SELECT dataInizio FROM Prenotazioni  WHERE idPrenotazione = :id", Date.class);
        query.setParameter("id",id);
        return query.getSingleResult();
    }

    public Prenotazioni getDataFine(){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.createQuery("SELECT dataFine FROM Prenotazioni", Prenotazioni.class).getSingleResult();
    }
}
