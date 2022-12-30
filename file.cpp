#include <iostream>
#include <fstream>
using namespace std;
int main()
{

    int std[5], math[5], phy[5], eng[5], i, pr[5], total[5], w = 36;
    char str[10][10];
    for (i = 1; i <= 5; i++)
    {
        cout << "Student no :" << i;

        cout << "\n Enter Name : ";
        cin >> str[i];

        cout << "\t Maths Mark : ";
        cin >> math[i];

        cout << "\t Phy Mark : ";
        cin >> phy[i];

        cout << "\t English Mark : ";
        cin >> eng[i];
    }
    ofstream filestream("file2.txt");
    if (filestream.is_open())
    {
        filestream << "std No.\tName\tMath\tPhy\tEng\tTotal\tPersant\tGrade\tScolership";
        for (i = 1; i <= 5; i++)
        {
            filestream << "\n"
                       << i << "\t" << str[i] << "\t" << math[i] << "\t" << phy[i] << "\t" << eng[i];
            if (math[i] <= 35 || eng[i] <= 35 || phy[i] <= 35)
            {
                pr[i] = 0;
            }
            else
            {
                total[i] = math[i] + eng[i] + phy[i];
                filestream << "\t" << total[i];

                pr[i] = total[i] * 100 / 300;
                filestream << "\t" << pr[i];
            }
            if (pr[i] > 35 && pr[i] <= 50)
            {
                filestream << "\tC";
            }
            else if (pr[i] > 50 && pr[i] <= 75)
            {
                filestream << "\tB";
            }
            else if (pr[i] > 75 && pr[i] <= 100)
            {
                filestream << "\tA";
                filestream << "\t 100" << (char)w;
            }
            else
            {
                filestream << "\tFail";
            }
            filestream << "\t";
        }

        filestream.close();
    }
    else
    {
        filestream << "file is not open";
    }
    return 0;
}