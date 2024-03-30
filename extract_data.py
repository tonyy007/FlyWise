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
    "Statue" : 0,
    "Shopping": 0,
    "Beach": 0,
    "Art" : 0,
    "Mountain" : 0,
    "Nature": 0,
    "Sea": 0,
    "Fashion": 0,
    "Food": 0
}
pref_keys = pref.keys()
extracted_data = []

for index, row in filtered_df.iterrows():
    for key in pref_keys:
        if key in row[attraction_col_name] and pref[key] < 100:
            pref[key] += 1

            data_json = row.to_dict()
            del data_json[' Address']
            del data_json[' Map']
            del data_json[attraction_col_name]
            data_json["preference"] = key
            extracted_data.append(data_json)


print(50 * '*')
print(extracted_data[:5])
print(50 * '*')
print(50 * '*')
print(pref)
print(50 * '*')

file_path = 'output.json'
with open(file_path, 'w') as json_file:
    json.dump(extracted_data, json_file)