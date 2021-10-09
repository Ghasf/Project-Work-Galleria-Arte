package it.project.galleria_arte.dao;

import it.project.galleria_arte.model.Anagrafica;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class AnagraficaDao {

    @Autowired
    private EntityManager entityManager; //prende le informazioni dal model e le traduce in query

    public List<Anagrafica> getAnagrafica(){
        Session currentSession = entityManager.unwrap(Session.class);
        return  currentSession.createQuery("FROM Anagrafica", Anagrafica.class).getResultList();
    }

    public Anagrafica getAnagraficaById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Anagrafica.class, id);
    }

    public void saveAnagrafica(Anagrafica anagrafica){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(anagrafica);
    }

    public List<String> getEmailList(){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<String> query = currentSession.createQuery("SELECT email FROM Anagrafica", String.class);
        return query.getResultList();
    }
    public String getPasswordByEmail(String email){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<String> query = currentSession.createQuery("SELECT password FROM Anagrafica WHERE email = :email", String.class);
        query.setParameter("email",email);
        return query.getSingleResult();
    }

    public Integer getUserIdByEmail(String email){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Integer> query = currentSession.createQuery("SELECT idAnagrafica FROM Anagrafica WHERE email = :email", Integer.class);
        query.setParameter("email",email);
        return query.getSingleResult();
    }
}
