import pandas as pd
import json

hotels = pd.read_csv('/Users/yatingupta/Downloads/hotels.csv', encoding='ISO-8859-1')
# print(hotels.sample(5))
column_names = hotels.columns
attraction_col_name = ' Attractions'
# Check if a value is float or not
def is_not_float(value):
    return not isinstance(value, float)

# Filter out rows where the value in the specified column is not a float
filtered_df = hotels[hotels[attraction_col_name].apply(is_not_float)]
unique_values = filtered_df[attraction_col_name].unique()

print(50 * '*')
print(f"Columns: {column_names}")
print(50 * '*')
print(50 * '*')
print(f"Data length: {len(unique_values)}")
print(50 * '*')

pref = {
    "statue" : 0,
    "shopping": 0,
    "beach": 0,
    "art" : 0,
    "mountain" : 0,
    "nature": 0,
    "sea": 0,
    "fashion": 0,
    "food": 0
}

trip_purpose_summary = {
    "leisure": 0,
    "business" :0,
    "family_vacation": 0,
    "honeymoon":0
}

trip_purpose_words = {
    "leisure": [
        "relaxation", "recreation", "enjoyment", "fun", "leisure", 
        "pastime", "entertainment", "hobby", "amusement", "diversion", 
        "holiday", "vacation", "break", "getaway", "pleasure", 
        "unwind", "chill", "escape", "rest", "play", 
        "activity", "outing", "trip", "outing", "outing", 
        "jaunt", "expedition", "journey", "retreat", "respite"
    ],
    "business" :[
        "business", "commerce", "trade", "industry", "enterprise", 
        "company", "firm", "corporation", "organization", "venture", 
        "work", "job", "career", "profession", "occupation", 
        "enterprise", "company", "corporate", "executive", "managerial", 
        "commercial", "industrial", "professional", "entrepreneurial", "financial"
    ],
    "family_vacation": [
        "family", "vacation", "holiday", "trip", "journey", 
        "getaway", "outing", "excursion", "tour", "retreat", 
        "recreation", "leisure", "fun", "relaxation", "adventure", 
        "expedition", "break", "staycation", "resort", "destination"
    ],
    "honeymoon": [
        "honeymoon", "romance", "love", "wedding", "marriage", 
        "trip", "getaway", "vacation", "holiday", "romantic", 
        "destination", "resort", "couple", "newlyweds", "bride", 
        "groom", "beach", "island", "paradise", "adventure"
    ]
}


pref_keys = pref.keys()
extracted_data = []

def replace_nans_with_string(d):
    for key, value in d.items():
        if isinstance(value, float) and value != value:  # Check if value is NaN
            d[key] = "NaN"
    return d

def check_word_in_string(word_array, input_string):
    for word in word_array:
        if word in input_string:
            return True  
    return False  

for index, row in filtered_df.iterrows():
    for key in pref_keys:
        attraction_desc = row[attraction_col_name].lower()
        if key in attraction_desc and pref[key] < 150:
            pref[key] += 1

            trip_purpose_hotel = []
            for k2 in trip_purpose_summary.keys():    
                words = trip_purpose_words[k2]
                if check_word_in_string(words, attraction_desc) or check_word_in_string(words, str(row[" HotelFacilities"])):
                    trip_purpose_summary[k2] += 1
                    trip_purpose_hotel.append(k2)


            data_json = row.to_dict()
            del data_json[' Address']
            del data_json[' Map']
            del data_json[attraction_col_name]
            data_json["preference"] = key
            data_json["trip_purpose_hotel"] = trip_purpose_hotel
            data_json = replace_nans_with_string(data_json)
            extracted_data.append(data_json)


print(50 * '*')
print(extracted_data[:5])
print(50 * '*')
print(50 * '*')
print(pref)
print(50 * '*')
print(trip_purpose_summary)
print(50 * '*')



keys_to_extract = ["preference", " HotelRating"]

for k in keys_to_extract:
    unique_values = set(d[k] for d in extracted_data)
    print(50 * '*')
    print(k)
    print(50 * '*')
    print(list(unique_values))
    print(50 * '*')

file_path = 'output.json'
with open(file_path, 'w') as json_file:
    json.dump(extracted_data, json_file)