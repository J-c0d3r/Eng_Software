import org.junit.Test;

import java.util.EmptyStackException;

import static org.junit.Assert.*;

public class PilhaTeste {

    @Test
    public void testePilhaVazia(){
        Pilha<Integer> pilhaInteiros = new Pilha<Integer>();

        boolean vazia = pilhaInteiros.pilhaVazia();

        assertTrue(vazia);
    }

    @Test
    public void testePilhaPush(){
        Pilha<Integer> pilhaInt = new Pilha<Integer>();

        pilhaInt.push(23);
        int tamanho = pilhaInt.size();

        assertEquals(1, tamanho);

    }

    @Test
    public void testePilhaPop(){
        Pilha<Integer> pilhaInt = new Pilha<Integer>();
        pilhaInt.push(23);
        pilhaInt.pop();
        int tamanho = pilhaInt.size();
        assertEquals(0, tamanho);
    }

    @Test (expected = EmptyStackException.class)
    public void testePilhaPopException(){
        Pilha<Integer> pilhaInt = new Pilha<Integer>();
        int elemento = pilhaInt.pop();
    }

}
