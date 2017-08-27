import os, os.path, datetime, sys, time, subprocess, shutil
from os.path import join, dirname, realpath

reload(sys)
sys.setdefaultencoding('utf-8')

dd = [x[0] for x in os.walk(dirname(realpath(__file__)))]
dd.pop(0)
for path in dd:
    cmd="n=1; for i in %s/*.jpg; do convert $i -resize 200x %s/$n-thumb.jpg; convert $i -resize 1024x $i;n=$(($n+1));done;"%(path,path)
    print subprocess.check_output(cmd,stderr=subprocess.STDOUT,shell=True)
