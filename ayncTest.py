import time


# class Test:
#     async def printTime(self):
#         print(time.strftime("%H:%M:%S"))
#         time.sleep(5)
#         print(time.strftime("%H:%M:%S"))
#
#
# test = Test()
# test.printTime()
# for i in range(5):
#     yield time.sleep(5)

for i in range(10):
    print("AAA => "+str(i))
    for i in range(3):
        print(i)

