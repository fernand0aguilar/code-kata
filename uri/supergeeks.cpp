#include <iostream>

using namespace std;

int main(){
    int qtd_alunos;
    int qtd_monitor;
    int total = 0;

    cin >> qtd_alunos >> qtd_monitor;

    total = qtd_alunos + qtd_monitor;

    (total < 50 && total > 0)
    ? cout << "Sim" << endl 
    : cout << "Nao" << endl; 

    return 0;
}