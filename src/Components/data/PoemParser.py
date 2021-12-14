import json

file_name = "/Users/andreasleonard-calcano/Documents/School/Third-Year-2021-2022/DHSS-101/FinalProject/finalproject/digitalhumanities101final/src/Components/data/Poems.txt"


def create_library(id, title):
    my_dict = dict(id = id , author= "", title=title, poemText=[] , date= "")
    return my_dict

def format_data():
    output = []
    test_string = '\r\n'
    id_counter  = 0
    with open(file_name)as f:
        data = f.readlines()
    for counter in range(0, len(data)):
        
        if len(output) == 0:
            output.append(create_library(counter , data[counter]))
        # this is to check if there is a paragraph
        try: 
            print(data[counter])
            # checks if the readline hits a new line
            if data[counter] == '\n':
                print('-----Newline interacted-------')
                # checks if there is a second one to add a new paragraph
                if data[counter + 1] == '\n' and data[counter + 2] != '\n':
                    print("new paragraph")  
                    # checks to see if there is a new poem.  
                elif data[counter + 1] == '\n' and data[counter+ 2] == '\n':
                   print("--------This is Where a new Poem starts----------")
                   print(data[counter])
            else:
                len_of_data = len(output)- 1
                poem_cursor = len(output[len_of_data]['poemText'])
                output[len_of_data]['poemText'][poem_cursor] += data[counter] 
                print(output[len_of_data]['poemText'][poem_cursor])  

        except:
            print("no data")
def main():
    format_data()

main()