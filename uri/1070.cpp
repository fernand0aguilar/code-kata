#include <iostream>

using namespace std;

int main()
{
    int valor;
    int six = 6;

    cin >> valor;

    while(six != 0){
        for(int i = valor; i < 10e6; i++){
            if(i % 2 != 0){
                cout << i << endl;
                valor = i+1;
                six--;
                break;
            }   
        }
    }
    return 0;
}