public class Caminhao extends Veiculo {

    private int eixos;

    public Caminhao(String placa, int ano, int eixos) {
        setPlaca(placa);
        setAno(ano);
        this.eixos = eixos;
    }

    public void setEixos(int eixos) {
        this.eixos = eixos;
    }

    public int getEixos() {
        return eixos;
    }

    @Override
    public void exibirDados() {
        super.exibirDados();
        System.out.println("Eixos:" + eixos);
    }
}
