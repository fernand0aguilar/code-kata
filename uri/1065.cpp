#include <iostream>

using namespace std;

int main()
{
    int qnt_pos = 0;

    for (int i = 0; i < 5; i++)
    {
        int valor;
        cin >> valor;

        if (valor % 2 == 0)
        {
            qnt_pos++;
        }
    }

    cout << qnt_pos << " valores pares" << endl;

    return 0;
}