#include <iostream>

using namespace std;

int main(){
    int x, y;
    int sum_impar = 0;
    
    int first, second;

    cin >> x >> y;

    if (y < x){
        first = y;
        second = x;
    }
    else{
        first = x;
        second = y;
    }

    for(int i = first+1; i < second; i++){
        if (i % 2 != 0){
            sum_impar += i;
        }
    }
    cout << sum_impar << endl;

    return 0;
}