package it.project.galleria_arte.dao;

import it.project.galleria_arte.model.Sale;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class SaleDao {

    @Autowired
    private EntityManager entityManager; //prende le informazioni dal model e le traduce in query

    public List<Sale> getSale(){
        Session currentSession = entityManager.unwrap(Session.class);
        return  currentSession.createQuery("FROM Sale", Sale.class).getResultList();
    }

    public Sale getSalaByName(String nomeSala){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Sale> query = currentSession.createQuery("FROM Sale WHERE nome = :nomeSala", Sale.class);
        query.setParameter("nomeSala", nomeSala);
        return query.getSingleResult();
    }
}
