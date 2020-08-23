import pandas as pd
import os

base_path = 'datasets/xia4ngji1dui4jia1ojia4ozhu3nshu4ju4ji2-5d7154881afd9440006d2a54'

movies_dataset = pd.read_csv(os.path.join(base_path, 'movies.csv'))
tags_dataset = pd.read_csv(os.path.join(base_path, 'tags.csv'))
ratings_dataset = pd.read_csv(os.path.join(base_path, 'ratings.csv'))

print(movies_dataset.values)
print(tags_dataset.values)
print(ratings_dataset.values)