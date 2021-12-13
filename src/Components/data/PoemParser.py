import json




def create_library(id, title):
    my_dict  = dict(id = id , author= "", title=title, poemText="" , date= "")
    return my_dict

def format_data():
    output = []
    test_string = '\r\n'
    id_counter  = 0
    with open('src\Components\data\Poems.txt' , encoding="utf8")as f:
        data = f.readlines()
        print(data)
    
    for counter in range(0, len(data)):
        
        if len(output) == 0:
            output.append(create_library(counter , data[counter]))
        # this is to check if there is a paragraph
        try: 
            print(data[counter])
            if data[counter] == '\n':
                print('he I made it')
                
                if data[counter + 1] == '\n':
                    print("this is where the new poem is started")
                    print(counter)
                    create_library(id_counter , data[counter])
                    print(output)
                    
                elif data[counter + 1] == '\n' and data[counter+ 2] == '\n':
                    print("this is where the new poem is started")
                    counter += 3
                    create_library(id_counter , data[counter])
                    print(output)
                    
        except:
            print("no data")
def main():
    format_data()

main()