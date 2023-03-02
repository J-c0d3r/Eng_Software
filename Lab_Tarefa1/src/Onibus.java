public class Onibus extends Veiculo {

    private int assentos;

    public Onibus(String placa, int ano, int assentos){
        setPlaca(placa);
        setAno(ano);
        this.assentos = assentos;
    }

    public void setAssentos(int assentos) {
        this.assentos = assentos;
    }

    public int getAssentos() {
        return assentos;
    }

    @Override
    public void exibirDados() {
        super.exibirDados();
        System.out.println("Assentos: " + assentos);
    }
}
