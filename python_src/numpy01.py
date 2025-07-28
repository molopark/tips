import numpy as np

# 1차원 배열 생성
python_list = [1, 2, 3, 4, 5]
np_array_1d = np.array(python_list)

print(f"파이썬 리스트: {python_list}")
print(f"NumPy 1차원 배열: {np_array_1d}")
print(f"배열의 타입: {type(np_array_1d)}")

# 2차원 배열 (행렬) 생성
python_list_2d = [[1, 2, 3], [4, 5, 6]]
np_array_2d = np.array(python_list_2d)

print("\nNumPy 2차원 배열:")
print(np_array_2d)
