#include <iostream>

using namespace std;

int main()
{
    int sum_positivos = 0;

    for (int i = 0; i < 6; i++)
    {
        float valor;
        cin >> valor;

        if (valor > 0)
        {
            sum_positivos++;
        }
    }
    cout << sum_positivos << " valores positivos" << endl;

    return 0;
}