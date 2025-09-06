import clases.Algoritmos;
public class Aplicacion {
    public static void main(String args[]){
    int numero1 = 6;
    int numero2 = 7;
    String textoA ="hola";
    String textoB ="reconocer";

    System.out.println(Algoritmos.esPar(numero1));
    System.out.println(Algoritmos.esPar(numero2));
    System.out.println(Algoritmos.esPrimo(numero1));
    System.out.println(Algoritmos.esPrimo(numero2));
    System.out.println(Algoritmos.stringEnReversa(textoA));
    System.out.println(Algoritmos.esPalindromo(textoB));
    Algoritmos.secuenciaFizzBuzz(10);
    }
}