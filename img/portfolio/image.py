import os
from PIL import Image


paths = ['buhran/','agroLlapi/','albiMall/','furra/','bpHomes/']

path = paths[4]
files = os.listdir(path)
i = 1
for file in files:
    image = Image.open(os.path.join(path, file))
    image.save(os.path.join(path, str(i)+'-1.jpg'),quality=1,optimize=True)
    # os.rename(os.path.join(path, file), os.path.join(path, str(i)+'.jpg'))
    i = i+1
