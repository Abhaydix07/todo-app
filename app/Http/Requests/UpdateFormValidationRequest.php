<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateFormValidationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $userId = request()->route('id');

        return [
            'name' => 'required|regex:/^[a-zA-Z\s]+$/',
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($userId),
            ],
            'mobile_no' => [
                'required',
                'digits:10',
                Rule::unique('users')->ignore($userId),
            ],
            'profile_pic' => 'nullable|image|mimes:jpeg,png,jpg|max:10240',
            'password' => 'required|min:6',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Name is required.',
            'name.regex' => 'Name should only contain alphabets and spaces.',
            'email.required' => 'Email is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email is already taken.',
            'mobile_no.required' => 'Mobile number is required.',
            'mobile_no.digits' => 'Mobile number must be exactly 10 digits long.',
            'mobile_no.unique' => 'This mobile number is already taken.',
            'profile_pic.image' => 'Profile picture must be an image file.',
            'profile_pic.mimes' => 'Profile picture must be of type: jpeg, png, jpg.',
            'profile_pic.max' => 'Profile picture size should not exceed 2MB.',
            'password.required' => 'Password is required.',
            'password.min' => 'Password must be at least :min characters long.',
        ];
    }
}
