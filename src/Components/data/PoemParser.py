import json




def create_library(id, title):
    my_dict  = dict(id = id , author= "", title=title, poemText="" , date= "")
    return my_dict

def format_data():
    output = []
    test_string = '\r\n'
    with open('finalproject/digitalhumanities101final/src/Components/data/Poems.txt')as f:
        data = f.readlines()
    for counter in range(0, len(data)):
        
        if len(output) == 0:
            output.append(create_library(counter , data[counter]))
        # this is to check if there is a paragraph
        try: 
            if data[counter] == '\r\n' and data[counter + 1] == '\r\n' :
                pass
            if data[counter + 1 ] == '\r\n' and data[counter + 2] == '\r\n':
                pass
        except:
            print("no data")
def main():
    format_data()

main()