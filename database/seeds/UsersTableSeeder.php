<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'first_name' => 'Miroslav',
            'last_name'  => 'Stanojevic',
            'email' => 'test@test.com',
            'password' => Hash::make('123456'),
            'company' => 'Company Ltd.',
            'country'=> 'Serbia',
        ]);
    }
}
