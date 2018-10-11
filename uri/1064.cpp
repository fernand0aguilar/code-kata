#include <iostream>

using namespace std;

int main()
{
    int qnt_pos = 0;
    float sum_pos = 0;

    for (int i = 0; i < 6; i++)
    {
        float valor;
        cin >> valor;

        if (valor > 0)
        {
            qnt_pos++;
            sum_pos += valor;
        }
    }
    if (sum_pos == 0)
        return 1;

    cout << qnt_pos << " valores positivos" << endl;
    printf("%.1lf\n", sum_pos/qnt_pos);
    return 0;
}